/**
 * Created by paul.watkinson on 14/12/2015.
 */

'use strict';

const util = require('util');

/**
 * @constructor TypeOf
 * @extends Object
 */
var TypeOf = function() {
    if (!(this instanceof TypeOf)) {
        return new TypeOf();
    }

    return this;
};

util.inherits(TypeOf, Object);

Object.defineProperties(TypeOf.prototype, {
    'getType': {
        /**
         * Gets the type of a value
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.getType
         * @member TypeOf#getType
         * @param {*} object The object to test
         * @return {String} The type
         */
        'value': function(object) {
            return Object.prototype.toString.call(object);
        }
    },

    'isTypeOf': {
        /**
         * Check if an object is the of the type given<br/>
         * Types can be given in split by a '|' character, each type will then be checked against.
         * If the value is one of those types this function will return true.
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isTypeOf
         * @member TypeOf#isTypeOf
         * @example
         * var number = 5;
         * if (_.isTypeOf(number, 'Object|Number')) {
         *     console.log('Yup!');
         * }
         * @param {*} object The object to test
         * @param {String|Array} type The type to check
         * @return {Boolean}
         */
        'value': function(object, type) {
            if (type.indexOf('|') !== -1) {
                return type.split('|').some((type) => this.isTypeOf(object, type));
            }

            return (this.getType(object) === `[object ${type}]`);
        }
    },

    'isObject': {
        /**
         * Check if a value is an object
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isObject
         * @member TypeOf#isObject
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object Object]';
        }
    },

    'isArray': {
        /**
         * Check if a value is an array
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isArray
         * @member TypeOf#isArray
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object Array]';
        }
    },

    'isString': {
        /**
         * Check if a value is a string
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isString
         * @member TypeOf#isString
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object String]';
        }
    },

    'isNumber': {
        /**
         * Checks if a value is a number
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isNumber
         * @member TypeOf#isNumber
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object Number]';
        }
    },

    'isNaN': {
        /**
         * Checks if an object is a 'NaN' value
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isNaN
         * @member TypeOf#isNaN
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': Number.isNaN
    },

    'isUndefined': {
        /**
         * Checks if an object is undefined
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isUndefined
         * @member TypeOf#isUndefined
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object Undefined]';
        }
    },

    'isNull': {
        /**
         * Checks if an object is null
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isNull
         * @member TypeOf#isNull
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object Null]';
        }
    },

    'isFunction': {
        /**
         * Checks if an object is a function
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isFunction
         * @member TypeOf#isFunction
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object Function]';
        }
    },

    'isDate': {
        /**
         * Checks if an object is a date
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isDate
         * @member TypeOf#isDate
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object Date]';
        }
    },

    'isRegExp': {
        /**
         * checks if an object is a regex
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isRegExp
         * @member TypeOf#isRegExp
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object RegExp]';
        }
    },

    'isInfinity': {
        /**
         * Checks if an object is +/- Infinity
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isInfinity
         * @member TypeOf#isInfinity
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return (
                object === Infinity ||
                object === -Infinity
            );
        }
    },

    'isBoolean': {
        /**
         * Checks if an object is a boolean
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isBoolean
         * @member TypeOf#isBoolean
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return this.getType(object) === '[object Boolean]';
        }
    },

    'isDefined': {
        /**
         * Checks if an object isn't null and isn't undefined
         *
         * @this TypeOf
         * @memberof TypeOf#
         * @alias TypeOf.isDefined
         * @method TypeOf#isDefined
         * @param {*} object The object to test
         * @return {Boolean}
         */
        'value': function(object) {
            return !(
                this.isUndefined(object) ||
                this.isNull(object)
            );
        }
    }
});

module.exports = new TypeOf();
