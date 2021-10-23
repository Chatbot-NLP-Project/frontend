function cov_1ph8q1hl4b() {
  var path = "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\pages\\Transportation\\Chatbot\\messageParser.js";
  var hash = "3f6788955a26c4b072b420db11f6b4abb39c4cac";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\pages\\Transportation\\Chatbot\\messageParser.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 41
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 23
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 25
        }
      },
      "3": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 17
        }
      },
      "4": {
        start: {
          line: 10,
          column: 14
        },
        end: {
          line: 10,
          column: 48
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "6": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 59
        }
      },
      "7": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 2,
            column: 3
          }
        },
        loc: {
          start: {
            line: 2,
            column: 37
          },
          end: {
            line: 7,
            column: 3
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }],
        line: 11
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3f6788955a26c4b072b420db11f6b4abb39c4cac"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ph8q1hl4b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ph8q1hl4b();

class MessageParser {
  constructor(actionProvider, state) {
    cov_1ph8q1hl4b().f[0]++;
    cov_1ph8q1hl4b().s[0]++;
    this.actionProvider = actionProvider;
    cov_1ph8q1hl4b().s[1]++;
    this.state = state;
    cov_1ph8q1hl4b().s[2]++;
    this.disease = false;
    cov_1ph8q1hl4b().s[3]++;
    this.num = 0;
  }

  parse(message) {
    cov_1ph8q1hl4b().f[1]++;
    var siz = (cov_1ph8q1hl4b().s[4]++, this.state.currentState.length - 1);
    cov_1ph8q1hl4b().s[5]++;

    if (this.state.currentState[siz] == "travel") {
      cov_1ph8q1hl4b().b[0][0]++;
      cov_1ph8q1hl4b().s[6]++;
      this.actionProvider.fromHandler(message, this.state);
    } else {
      cov_1ph8q1hl4b().b[0][1]++;
      cov_1ph8q1hl4b().s[7]++;
      this.actionProvider.messageHandler(message, this.state);
    }
  } // parse(message) {
  //   var siz = this.state.currentState.length - 1;
  //   console.log(this.state); 
  //   if (
  //     this.state.currentState[siz] == "travel" &&
  //     this.state.to.length == 1 
  //   ) { if (this.state.from.length == 1)        
  //         { 
  //           this.actionProvider.methodsHandler(this.state.to, this.state.from, this.state.method);
  //       } else {
  //     // ask where to start from
  //   }    
  //    } 
  //   else {
  //     this.actionProvider.messageHandler(message);
  //   }
  // }


}

export default MessageParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VQYXJzZXIuanMiXSwibmFtZXMiOlsiTWVzc2FnZVBhcnNlciIsImNvbnN0cnVjdG9yIiwiYWN0aW9uUHJvdmlkZXIiLCJzdGF0ZSIsImRpc2Vhc2UiLCJudW0iLCJwYXJzZSIsIm1lc3NhZ2UiLCJzaXoiLCJjdXJyZW50U3RhdGUiLCJsZW5ndGgiLCJmcm9tSGFuZGxlciIsIm1lc3NhZ2VIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixNQUFNQSxhQUFOLENBQW9CO0FBQ2xCQyxFQUFBQSxXQUFXLENBQUNDLGNBQUQsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQUE7QUFBQTtBQUNqQyxTQUFLRCxjQUFMLEdBQXNCQSxjQUF0QjtBQURpQztBQUVqQyxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFGaUM7QUFHakMsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFIaUM7QUFJakMsU0FBS0MsR0FBTCxHQUFXLENBQVg7QUFDRDs7QUFFREMsRUFBQUEsS0FBSyxDQUFDQyxPQUFELEVBQVU7QUFBQTtBQUNiLFFBQUlDLEdBQUcsNkJBQUcsS0FBS0wsS0FBTCxDQUFXTSxZQUFYLENBQXdCQyxNQUF4QixHQUFpQyxDQUFwQyxDQUFQO0FBRGE7O0FBRWIsUUFBSyxLQUFLUCxLQUFMLENBQVdNLFlBQVgsQ0FBd0JELEdBQXhCLEtBQWdDLFFBQXJDLEVBQThDO0FBQUE7QUFBQTtBQUM1QyxXQUFLTixjQUFMLENBQW9CUyxXQUFwQixDQUFnQ0osT0FBaEMsRUFBeUMsS0FBS0osS0FBOUM7QUFDRCxLQUZELE1BR0k7QUFBQTtBQUFBO0FBQ0osV0FBS0QsY0FBTCxDQUFvQlUsY0FBcEIsQ0FBbUNMLE9BQW5DLEVBQTRDLEtBQUtKLEtBQWpEO0FBQ0M7QUFFRixHQWpCaUIsQ0FtQmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQW5Da0I7O0FBc0NwQixlQUFlSCxhQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWVzc2FnZVBhcnNlciB7XHJcbiAgY29uc3RydWN0b3IoYWN0aW9uUHJvdmlkZXIsIHN0YXRlKSB7XHJcbiAgICB0aGlzLmFjdGlvblByb3ZpZGVyID0gYWN0aW9uUHJvdmlkZXI7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzLmRpc2Vhc2UgPSBmYWxzZTtcclxuICAgIHRoaXMubnVtID0gMDtcclxuICB9XHJcblxyXG4gIHBhcnNlKG1lc3NhZ2UpIHtcclxuICAgIHZhciBzaXogPSB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZS5sZW5ndGggLSAxO1xyXG4gICAgaWYgKCB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZVtzaXpdID09IFwidHJhdmVsXCIpe1xyXG4gICAgICB0aGlzLmFjdGlvblByb3ZpZGVyLmZyb21IYW5kbGVyKG1lc3NhZ2UsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgIHRoaXMuYWN0aW9uUHJvdmlkZXIubWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gcGFyc2UobWVzc2FnZSkge1xyXG4gIC8vICAgdmFyIHNpeiA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlLmxlbmd0aCAtIDE7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTsgXHJcbiAgLy8gICBpZiAoXHJcbiAgLy8gICAgIHRoaXMuc3RhdGUuY3VycmVudFN0YXRlW3Npel0gPT0gXCJ0cmF2ZWxcIiAmJlxyXG4gIC8vICAgICB0aGlzLnN0YXRlLnRvLmxlbmd0aCA9PSAxIFxyXG4gIC8vICAgKSB7IGlmICh0aGlzLnN0YXRlLmZyb20ubGVuZ3RoID09IDEpICAgICAgICBcclxuICAvLyAgICAgICAgIHsgXHJcbiAgLy8gICAgICAgICAgIHRoaXMuYWN0aW9uUHJvdmlkZXIubWV0aG9kc0hhbmRsZXIodGhpcy5zdGF0ZS50bywgdGhpcy5zdGF0ZS5mcm9tLCB0aGlzLnN0YXRlLm1ldGhvZCk7XHJcbiAgLy8gICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgLy8gYXNrIHdoZXJlIHRvIHN0YXJ0IGZyb21cclxuICAvLyAgIH0gICAgXHJcbiAgLy8gICAgfSBcclxuICAvLyAgIGVsc2Uge1xyXG4gIC8vICAgICB0aGlzLmFjdGlvblByb3ZpZGVyLm1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVBhcnNlcjsiXX0=