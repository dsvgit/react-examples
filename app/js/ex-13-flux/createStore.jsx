import FluxStore from 'flux/lib/FluxStore';

export default function(name, options, dispatcher) {
    var _handlers = {};

    if (!dispatcher) {
        dispatcher = AppDispatcher;
    }
    var store = new FluxStore(dispatcher);
    store = _.extend(store, options);
    store = _.extend(store, {
        __onDispatch: (action) => {
            var handler = _handlers[action.type];
            if (!handler) return;
            handler.call(this, action);
        }
    });

    _.functions(options).forEach((name) => {
        let func = options[name];
        store[name] = _.bind(func, store);
    });

    if (store.handlers) {
        Object.keys(store.handlers).forEach((actionType) => {
            //handler can be either anonymous function or instance-method
            var handler = store.handlers[actionType];
            if (_.isString(handler)) { //it is a simply action name
                var func = store[handler];
                if (_.isFunction(func)) {
                    _handlers[actionType] = func;
                }
            } else if (_.isFunction(handler)) { // it is a function
                _handlers[actionType] = handler;
            }
        }, this);
    }
    return store;
};