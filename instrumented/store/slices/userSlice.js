function cov_tm9gjn6k1() {
  var path = "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\store\\slices\\userSlice.js";
  var hash = "aa8fb438f529e90ed56693b980c28b0b320f2648";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\store\\slices\\userSlice.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 18,
          column: 2
        }
      },
      "1": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 40
        }
      },
      "2": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 30
        }
      },
      "3": {
        start: {
          line: 20,
          column: 33
        },
        end: {
          line: 20,
          column: 50
        }
      },
      "4": {
        start: {
          line: 23,
          column: 26
        },
        end: {
          line: 23,
          column: 52
        }
      },
      "5": {
        start: {
          line: 23,
          column: 37
        },
        end: {
          line: 23,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 15
          },
          end: {
            line: 10,
            column: 16
          }
        },
        loc: {
          start: {
            line: 10,
            column: 34
          },
          end: {
            line: 12,
            column: 9
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 17
          }
        },
        loc: {
          start: {
            line: 14,
            column: 27
          },
          end: {
            line: 16,
            column: 9
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 23,
            column: 27
          }
        },
        loc: {
          start: {
            line: 23,
            column: 37
          },
          end: {
            line: 23,
            column: 52
          }
        },
        line: 23
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "aa8fb438f529e90ed56693b980c28b0b320f2648"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_tm9gjn6k1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_tm9gjn6k1();
import { createSlice } from '@reduxjs/toolkit';
export const userSlice = (cov_tm9gjn6k1().s[0]++, createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      cov_tm9gjn6k1().f[0]++;
      cov_tm9gjn6k1().s[1]++;
      state.user = action.payload;
    },
    logout: state => {
      cov_tm9gjn6k1().f[1]++;
      cov_tm9gjn6k1().s[2]++;
      state.user = null;
    }
  }
})); //These are the actions

export const {
  login,
  logout
} = (cov_tm9gjn6k1().s[3]++, userSlice.actions);
cov_tm9gjn6k1().s[4]++;
export const selectUser = state => {
  cov_tm9gjn6k1().f[2]++;
  cov_tm9gjn6k1().s[5]++;
  return state.user.user;
};
export default userSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJTbGljZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInVzZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicmVkdWNlcnMiLCJsb2dpbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ291dCIsImFjdGlvbnMiLCJzZWxlY3RVc2VyIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFRQSxXQUFSLFFBQTBCLGtCQUExQjtBQUVBLE9BQU8sTUFBTUMsU0FBUyw0QkFBR0QsV0FBVyxDQUFDO0FBQ2pDRSxFQUFBQSxJQUFJLEVBQUUsTUFEMkI7QUFFakNDLEVBQUFBLFlBQVksRUFBRTtBQUNWQyxJQUFBQSxJQUFJLEVBQUU7QUFESSxHQUZtQjtBQU1qQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLEtBQUssRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFBQTtBQUFBO0FBQ3RCRCxNQUFBQSxLQUFLLENBQUNILElBQU4sR0FBYUksTUFBTSxDQUFDQyxPQUFwQjtBQUNILEtBSEs7QUFLTkMsSUFBQUEsTUFBTSxFQUFHSCxLQUFELElBQVc7QUFBQTtBQUFBO0FBQ2ZBLE1BQUFBLEtBQUssQ0FBQ0gsSUFBTixHQUFhLElBQWI7QUFDSDtBQVBLO0FBTnVCLENBQUQsQ0FBZCxDQUFmLEMsQ0FnQlA7O0FBQ0EsT0FBTyxNQUFNO0FBQUVFLEVBQUFBLEtBQUY7QUFBU0ksRUFBQUE7QUFBVCw2QkFBb0JULFNBQVMsQ0FBQ1UsT0FBOUIsQ0FBTjs7QUFHUCxPQUFPLE1BQU1DLFVBQVUsR0FBSUwsS0FBRCxJQUFXO0FBQUE7QUFBQTtBQUFBLFNBQUFBLEtBQUssQ0FBQ0gsSUFBTixDQUFXQSxJQUFYO0FBQWUsQ0FBN0M7QUFFUCxlQUFlSCxTQUFTLENBQUNZLE9BQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTbGljZX0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3VzZXInLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgdXNlcjogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGxvZ2luOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG4vL1RoZXNlIGFyZSB0aGUgYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XHJcbiJdfQ==