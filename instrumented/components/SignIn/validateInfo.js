function cov_2etzg7dmol() {
  var path = "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\components\\SignIn\\validateInfo.js";
  var hash = "649a3e1b0d16e76bdc497a87582ffd5f021289cb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\components\\SignIn\\validateInfo.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 15
        },
        end: {
          line: 2,
          column: 17
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 36
        }
      },
      "3": {
        start: {
          line: 6,
          column: 9
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "4": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 46
        }
      },
      "5": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 45
        }
      },
      "7": {
        start: {
          line: 12,
          column: 9
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "8": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 66
        }
      },
      "9": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "validateInfo",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 36
          }
        },
        loc: {
          start: {
            line: 1,
            column: 45
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        }, {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 8,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 8,
            column: 3
          }
        }, {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 8,
            column: 3
          }
        }],
        line: 6
      },
      "2": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }],
        line: 10
      },
      "3": {
        loc: {
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 14,
            column: 3
          }
        }, {
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 14,
            column: 3
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "649a3e1b0d16e76bdc497a87582ffd5f021289cb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2etzg7dmol = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2etzg7dmol();
export default function validateInfo(values) {
  cov_2etzg7dmol().f[0]++;
  let errors = (cov_2etzg7dmol().s[0]++, {});
  cov_2etzg7dmol().s[1]++;

  if (!values.email) {
    cov_2etzg7dmol().b[0][0]++;
    cov_2etzg7dmol().s[2]++;
    errors.email = "Email required";
  } else {
    cov_2etzg7dmol().b[0][1]++;
    cov_2etzg7dmol().s[3]++;

    if (!/\S+@\S+\.\S+/.test(values.email)) {
      cov_2etzg7dmol().b[1][0]++;
      cov_2etzg7dmol().s[4]++;
      errors.email = "Email address is invalid";
    } else {
      cov_2etzg7dmol().b[1][1]++;
    }
  }

  cov_2etzg7dmol().s[5]++;

  if (!values.password) {
    cov_2etzg7dmol().b[2][0]++;
    cov_2etzg7dmol().s[6]++;
    errors.password = "Password is required";
  } else {
    cov_2etzg7dmol().b[2][1]++;
    cov_2etzg7dmol().s[7]++;

    if (values.password.length < 8) {
      cov_2etzg7dmol().b[3][0]++;
      cov_2etzg7dmol().s[8]++;
      errors.password = "Password needs to be 8 characters or more";
    } else {
      cov_2etzg7dmol().b[3][1]++;
    }
  }

  cov_2etzg7dmol().s[9]++;
  return errors;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlSW5mby5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUluZm8iLCJ2YWx1ZXMiLCJlcnJvcnMiLCJlbWFpbCIsInRlc3QiLCJwYXNzd29yZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixlQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCO0FBQUE7QUFDM0MsTUFBSUMsTUFBTSw2QkFBRyxFQUFILENBQVY7QUFEMkM7O0FBRzNDLE1BQUksQ0FBQ0QsTUFBTSxDQUFDRSxLQUFaLEVBQW1CO0FBQUE7QUFBQTtBQUNqQkQsSUFBQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWUsZ0JBQWY7QUFDRCxHQUZELE1BRU87QUFBQTtBQUFBOztBQUFBLFFBQUksQ0FBQyxlQUFlQyxJQUFmLENBQW9CSCxNQUFNLENBQUNFLEtBQTNCLENBQUwsRUFBd0M7QUFBQTtBQUFBO0FBQzdDRCxNQUFBQSxNQUFNLENBQUNDLEtBQVAsR0FBZSwwQkFBZjtBQUNELEtBRk07QUFBQTtBQUFBO0FBRU47O0FBUDBDOztBQVMzQyxNQUFJLENBQUNGLE1BQU0sQ0FBQ0ksUUFBWixFQUFzQjtBQUFBO0FBQUE7QUFDcEJILElBQUFBLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQixzQkFBbEI7QUFDRCxHQUZELE1BRU87QUFBQTtBQUFBOztBQUFBLFFBQUlKLE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFBQTtBQUFBO0FBQ3JDSixNQUFBQSxNQUFNLENBQUNHLFFBQVAsR0FBa0IsMkNBQWxCO0FBQ0QsS0FGTTtBQUFBO0FBQUE7QUFFTjs7QUFiMEM7QUFlM0MsU0FBT0gsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVJbmZvKHZhbHVlcykge1xyXG4gIGxldCBlcnJvcnMgPSB7fTtcclxuXHJcbiAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcclxuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgcmVxdWlyZWRcIjtcclxuICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdCh2YWx1ZXMuZW1haWwpKSB7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBcIkVtYWlsIGFkZHJlc3MgaXMgaW52YWxpZFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWx1ZXMucGFzc3dvcmQpIHtcclxuICAgIGVycm9ycy5wYXNzd29yZCA9IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcclxuICB9IGVsc2UgaWYgKHZhbHVlcy5wYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICBlcnJvcnMucGFzc3dvcmQgPSBcIlBhc3N3b3JkIG5lZWRzIHRvIGJlIDggY2hhcmFjdGVycyBvciBtb3JlXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JzO1xyXG59XHJcbiJdfQ==