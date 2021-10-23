function cov_m1269xn7l() {
  var path = "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\components\\Footer\\Footer.elements.js";
  var hash = "f0eb95c72e8fe709d90ebfb08e2d22639f8c7b4f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\components\\Footer\\Footer.elements.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 31
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 34
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 25,
          column: 32
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "3": {
        start: {
          line: 33,
          column: 29
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "4": {
        start: {
          line: 39,
          column: 20
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "5": {
        start: {
          line: 50,
          column: 25
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "6": {
        start: {
          line: 69,
          column: 36
        },
        end: {
          line: 79,
          column: 1
        }
      },
      "7": {
        start: {
          line: 81,
          column: 34
        },
        end: {
          line: 87,
          column: 1
        }
      },
      "8": {
        start: {
          line: 89,
          column: 31
        },
        end: {
          line: 104,
          column: 1
        }
      },
      "9": {
        start: {
          line: 106,
          column: 31
        },
        end: {
          line: 110,
          column: 1
        }
      },
      "10": {
        start: {
          line: 112,
          column: 26
        },
        end: {
          line: 121,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
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
      "9": 0,
      "10": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f0eb95c72e8fe709d90ebfb08e2d22639f8c7b4f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_m1269xn7l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_m1269xn7l();
import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const FooterContainer = (cov_m1269xn7l().s[0]++, styled.div`
  background-color: #F2F5FF;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);
export const FooterSubscription = (cov_m1269xn7l().s[1]++, styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`);
export const FooterSubHeading = (cov_m1269xn7l().s[2]++, styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
  color: black;
`);
export const FooterSubText = (cov_m1269xn7l().s[3]++, styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color: #1A365D;
`);
export const Form = (cov_m1269xn7l().s[4]++, styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`);
export const FormInput = (cov_m1269xn7l().s[5]++, styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`);
export const FooterLinksContainer = (cov_m1269xn7l().s[6]++, styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  color: black;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`);
export const FooterLinksWrapper = (cov_m1269xn7l().s[7]++, styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`);
export const FooterLinkItems = (cov_m1269xn7l().s[8]++, styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #1A365D;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`);
export const FooterLinkTitle = (cov_m1269xn7l().s[9]++, styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  color: #1A365D;
`);
export const FooterLink = (cov_m1269xn7l().s[10]++, styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: #1A365D;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvb3Rlci5lbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJGYU1hZ2VudG8iLCJMaW5rIiwiRm9vdGVyQ29udGFpbmVyIiwiZGl2IiwiRm9vdGVyU3Vic2NyaXB0aW9uIiwic2VjdGlvbiIsIkZvb3RlclN1YkhlYWRpbmciLCJwIiwiRm9vdGVyU3ViVGV4dCIsIkZvcm0iLCJmb3JtIiwiRm9ybUlucHV0IiwiaW5wdXQiLCJGb290ZXJMaW5rc0NvbnRhaW5lciIsIkZvb3RlckxpbmtzV3JhcHBlciIsIkZvb3RlckxpbmtJdGVtcyIsIkZvb3RlckxpbmtUaXRsZSIsImgyIiwiRm9vdGVyTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixnQkFBMUI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUVBLE9BQU8sTUFBTUMsZUFBZSw0QkFBR0gsTUFBTSxDQUFDSSxHQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUDRCLENBQXJCO0FBU1AsT0FBTyxNQUFNQyxrQkFBa0IsNEJBQUdMLE1BQU0sQ0FBQ00sT0FBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUK0IsQ0FBeEI7QUFXUCxPQUFPLE1BQU1DLGdCQUFnQiw0QkFBR1AsTUFBTSxDQUFDUSxDQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU42QixDQUF0QjtBQVFQLE9BQU8sTUFBTUMsYUFBYSw0QkFBR1QsTUFBTSxDQUFDUSxDQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLENBSjBCLENBQW5CO0FBTVAsT0FBTyxNQUFNRSxJQUFJLDRCQUFHVixNQUFNLENBQUNXLElBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVGlCLENBQVY7QUFXUCxPQUFPLE1BQU1DLFNBQVMsNEJBQUdaLE1BQU0sQ0FBQ2EsS0FBTTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJzQixDQUFmO0FBbUJQLE9BQU8sTUFBTUMsb0JBQW9CLDRCQUFHZCxNQUFNLENBQUNJLEdBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWaUMsQ0FBMUI7QUFZUCxPQUFPLE1BQU1XLGtCQUFrQiw0QkFBR2YsTUFBTSxDQUFDSSxHQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU4rQixDQUF4QjtBQVFQLE9BQU8sTUFBTVksZUFBZSw0QkFBR2hCLE1BQU0sQ0FBQ0ksR0FBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmNEIsQ0FBckI7QUFpQlAsT0FBTyxNQUFNYSxlQUFlLDRCQUFHakIsTUFBTSxDQUFDa0IsRUFBRztBQUN6QztBQUNBO0FBQ0E7QUFDQSxDQUo0QixDQUFyQjtBQU1QLE9BQU8sTUFBTUMsVUFBVSw2QkFBR25CLE1BQU0sQ0FBQ0UsSUFBRCxDQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVR1QixDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGYU1hZ2VudG8gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkY1RkY7XHJcbiAgcGFkZGluZzogNHJlbSAwIDJyZW0gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJTdWJzY3JpcHRpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlclN1YkhlYWRpbmcgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLFxyXG4gICAgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlclN1YlRleHQgPSBzdHlsZWQucGBcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMzY1RDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1JbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICMyNDI0MjQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckxpbmtzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJMaW5rc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJMaW5rSXRlbXMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW46IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzFBMzY1RDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTGlua1RpdGxlID0gc3R5bGVkLmgyYFxyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMUEzNjVEO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckxpbmsgPSBzdHlsZWQoTGluaylgXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBjb2xvcjogIzFBMzY1RDtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDQ2N2ZiO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcclxuICB9XHJcbmA7XHJcblxyXG4iXX0=