require("../../build/global.js");
const {
    add_completion_callback,
    assert_array_equals,
    assert_equals,
    assert_false,
    assert_not_equals,
    assert_throws,
    assert_true,
    async_test,
    createdb,
    createdb_for_multiple_tests,
    fail,
    indexeddb_test,
    setup,
    test,
} = require("../support-node.js");

const document = {};
const window = global;


    var open_rq = createdb(async_test(), 'database_name', 13);

    open_rq.onupgradeneeded = function(e) {};
    open_rq.onsuccess = function(e) {
        var db = e.target.result;
        assert_equals(db.name, 'database_name', 'db.name');
        assert_equals(db.version, 13, 'db.version');
        this.done();
    }