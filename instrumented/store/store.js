function cov_6hk2rw1ih() {
  var path = "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\store\\store.js";
  var hash = "b1dd9ee05d96af1a8374cc9b5730d70dd2d066f3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\store\\store.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b1dd9ee05d96af1a8374cc9b5730d70dd2d066f3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6hk2rw1ih = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_6hk2rw1ih();
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../store/slices/userSlice";
export default configureStore({
  reducer: {
    user: userReducer
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidXNlclJlZHVjZXIiLCJyZWR1Y2VyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLGNBQVQsUUFBK0Isa0JBQS9CO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QiwyQkFBeEI7QUFFQSxlQUFlRCxjQUFjLENBQUM7QUFDMUJFLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUVGO0FBREQ7QUFEaUIsQ0FBRCxDQUE3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3VzZXJTbGljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG4gICAgfSxcclxufSk7Il19