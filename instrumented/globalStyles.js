function cov_9nkge2neo() {
  var path = "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\globalStyles.js";
  var hash = "b433fc5c1738e8612dce71fad3e418b0cce75fad";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\globalStyles.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 25
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "2": {
        start: {
          line: 27,
          column: 22
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "3": {
        start: {
          line: 29,
          column: 34
        },
        end: {
          line: 29,
          column: 65
        }
      },
      "4": {
        start: {
          line: 31,
          column: 27
        },
        end: {
          line: 31,
          column: 58
        }
      },
      "5": {
        start: {
          line: 33,
          column: 33
        },
        end: {
          line: 33,
          column: 58
        }
      },
      "6": {
        start: {
          line: 41,
          column: 42
        },
        end: {
          line: 41,
          column: 73
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 17
          }
        },
        loc: {
          start: {
            line: 29,
            column: 34
          },
          end: {
            line: 29,
            column: 65
          }
        },
        line: 29
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 13
          },
          end: {
            line: 31,
            column: 14
          }
        },
        loc: {
          start: {
            line: 31,
            column: 27
          },
          end: {
            line: 31,
            column: 58
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 33,
            column: 15
          },
          end: {
            line: 33,
            column: 16
          }
        },
        loc: {
          start: {
            line: 33,
            column: 33
          },
          end: {
            line: 33,
            column: 58
          }
        },
        line: 33
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 41,
            column: 24
          },
          end: {
            line: 41,
            column: 25
          }
        },
        loc: {
          start: {
            line: 41,
            column: 42
          },
          end: {
            line: 41,
            column: 73
          }
        },
        line: 41
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 34
          },
          end: {
            line: 29,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 29,
            column: 44
          },
          end: {
            line: 29,
            column: 53
          }
        }, {
          start: {
            line: 29,
            column: 56
          },
          end: {
            line: 29,
            column: 65
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 27
          },
          end: {
            line: 31,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 33
          },
          end: {
            line: 31,
            column: 44
          }
        }, {
          start: {
            line: 31,
            column: 47
          },
          end: {
            line: 31,
            column: 58
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 33,
            column: 33
          },
          end: {
            line: 33,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 33,
            column: 43
          },
          end: {
            line: 33,
            column: 49
          }
        }, {
          start: {
            line: 33,
            column: 52
          },
          end: {
            line: 33,
            column: 58
          }
        }],
        line: 33
      },
      "3": {
        loc: {
          start: {
            line: 41,
            column: 42
          },
          end: {
            line: 41,
            column: 73
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 41,
            column: 52
          },
          end: {
            line: 41,
            column: 61
          }
        }, {
          start: {
            line: 41,
            column: 64
          },
          end: {
            line: 41,
            column: 73
          }
        }],
        line: 41
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b433fc5c1738e8612dce71fad3e418b0cce75fad"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9nkge2neo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_9nkge2neo();
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = (cov_9nkge2neo().s[0]++, createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`);
export const Container = (cov_9nkge2neo().s[1]++, styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`);
export const Button = (cov_9nkge2neo().s[2]++, styled.button`
  border-radius: 4px;
  background: ${({
  primary
}) => {
  cov_9nkge2neo().f[0]++;
  cov_9nkge2neo().s[3]++;
  return primary ? (cov_9nkge2neo().b[0][0]++, '#4B59F7') : (cov_9nkge2neo().b[0][1]++, '#0467FB');
}};
  white-space: nowrap;
  padding: ${({
  big
}) => {
  cov_9nkge2neo().f[1]++;
  cov_9nkge2neo().s[4]++;
  return big ? (cov_9nkge2neo().b[1][0]++, '12px 64px') : (cov_9nkge2neo().b[1][1]++, '10px 20px');
}};
  color: #fff;
  font-size: ${({
  fontBig
}) => {
  cov_9nkge2neo().f[2]++;
  cov_9nkge2neo().s[5]++;
  return fontBig ? (cov_9nkge2neo().b[2][0]++, '20px') : (cov_9nkge2neo().b[2][1]++, '16px');
}};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({
  primary
}) => {
  cov_9nkge2neo().f[3]++;
  cov_9nkge2neo().s[6]++;
  return primary ? (cov_9nkge2neo().b[3][0]++, '#0467FB') : (cov_9nkge2neo().b[3][1]++, '#4B59F7');
}};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`);
export default GlobalStyle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkdsb2JhbFN0eWxlIiwiQ29udGFpbmVyIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwicHJpbWFyeSIsImJpZyIsImZvbnRCaWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxJQUFpQkMsaUJBQWpCLFFBQTBDLG1CQUExQztBQUVBLE1BQU1DLFdBQVcsNEJBQUdELGlCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBpQixDQUFqQjtBQVNBLE9BQU8sTUFBTUUsU0FBUyw0QkFBR0gsTUFBTSxDQUFDSSxHQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBYnNCLENBQWY7QUFlUCxPQUFPLE1BQU1DLE1BQU0sNEJBQUdMLE1BQU0sQ0FBQ00sTUFBTztBQUNwQztBQUNBLGdCQUFnQixDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUFBO0FBQUE7QUFBQSxTQUFBQSxPQUFPLCtCQUFHLFNBQUgsZ0NBQWUsU0FBZixDQUFQO0FBQStCLENBQUU7QUFDbkU7QUFDQSxhQUFhLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWM7QUFBQTtBQUFBO0FBQUEsU0FBQUEsR0FBRywrQkFBRyxXQUFILGdDQUFpQixXQUFqQixDQUFIO0FBQStCLENBQUU7QUFDNUQ7QUFDQSxlQUFlLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQUE7QUFBQTtBQUFBLFNBQUFBLE9BQU8sK0JBQUcsTUFBSCxnQ0FBWSxNQUFaLENBQVA7QUFBeUIsQ0FBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixDQUFDO0FBQUVGLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUFBO0FBQUE7QUFBQSxTQUFBQSxPQUFPLCtCQUFHLFNBQUgsZ0NBQWUsU0FBZixDQUFQO0FBQStCLENBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBcEJtQixDQUFaO0FBc0JQLGVBQWVMLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuIH0gXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTMwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgcHJpbWFyeSB9KSA9PiAocHJpbWFyeSA/ICcjNEI1OUY3JyA6ICcjMDQ2N0ZCJyl9O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcGFkZGluZzogJHsoeyBiaWcgfSkgPT4gKGJpZyA/ICcxMnB4IDY0cHgnIDogJzEwcHggMjBweCcpfTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6ICR7KHsgZm9udEJpZyB9KSA9PiAoZm9udEJpZyA/ICcyMHB4JyA6ICcxNnB4Jyl9O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHByaW1hcnkgfSkgPT4gKHByaW1hcnkgPyAnIzA0NjdGQicgOiAnIzRCNTlGNycpfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcclxuIl19