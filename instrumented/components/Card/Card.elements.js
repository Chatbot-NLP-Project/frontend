function cov_xiw090wb5() {
  var path = "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\components\\Card\\Card.elements.js";
  var hash = "5b9fd2a889155e2cb99d27cdf62ca1f0bb4d3000";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\Academics\\Aca Folders\\Semester 5\\2 Software Engineering Project\\Project\\frontend\\src\\components\\Card\\Card.elements.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 30
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 30
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "2": {
        start: {
          line: 27,
          column: 30
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "3": {
        start: {
          line: 34,
          column: 32
        },
        end: {
          line: 46,
          column: 1
        }
      },
      "4": {
        start: {
          line: 48,
          column: 27
        },
        end: {
          line: 73,
          column: 1
        }
      },
      "5": {
        start: {
          line: 75,
          column: 31
        },
        end: {
          line: 82,
          column: 1
        }
      },
      "6": {
        start: {
          line: 84,
          column: 31
        },
        end: {
          line: 86,
          column: 1
        }
      },
      "7": {
        start: {
          line: 88,
          column: 31
        },
        end: {
          line: 91,
          column: 1
        }
      },
      "8": {
        start: {
          line: 93,
          column: 31
        },
        end: {
          line: 95,
          column: 1
        }
      },
      "9": {
        start: {
          line: 97,
          column: 33
        },
        end: {
          line: 100,
          column: 1
        }
      },
      "10": {
        start: {
          line: 102,
          column: 35
        },
        end: {
          line: 109,
          column: 1
        }
      },
      "11": {
        start: {
          line: 111,
          column: 34
        },
        end: {
          line: 113,
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
      "10": 0,
      "11": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5b9fd2a889155e2cb99d27cdf62ca1f0bb4d3000"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_xiw090wb5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_xiw090wb5();
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const PricingSection = (cov_xiw090wb5().s[0]++, styled.div`
  padding: 10px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
`);
export const PricingWrapper = (cov_xiw090wb5().s[1]++, styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`);
export const PricingHeading = (cov_xiw090wb5().s[2]++, styled.h1`
  color: black;
  text-decoration: underline;
  font-size: 48px;
  margin-bottom: 24px;
`);
export const PricingContainer = (cov_xiw090wb5().s[3]++, styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`);
export const PricingCard = (cov_xiw090wb5().s[4]++, styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 290px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`);
export const PricingCardInfo = (cov_xiw090wb5().s[5]++, styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`);
export const PricingCardIcon = (cov_xiw090wb5().s[6]++, styled.div`
  margin: 24px 0;
`);
export const PricingCardPlan = (cov_xiw090wb5().s[7]++, styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`);
export const PricingCardCost = (cov_xiw090wb5().s[8]++, styled.h4`
  font-size: 40px;
`);
export const PricingCardLength = (cov_xiw090wb5().s[9]++, styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`);
export const PricingCardFeatures = (cov_xiw090wb5().s[10]++, styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`);
export const PricingCardFeature = (cov_xiw090wb5().s[11]++, styled.li`
  margin-bottom: 10px;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcmQuZWxlbWVudHMuanMiXSwibmFtZXMiOlsiTGluayIsInN0eWxlZCIsIlByaWNpbmdTZWN0aW9uIiwiZGl2IiwiUHJpY2luZ1dyYXBwZXIiLCJQcmljaW5nSGVhZGluZyIsImgxIiwiUHJpY2luZ0NvbnRhaW5lciIsIlByaWNpbmdDYXJkIiwiUHJpY2luZ0NhcmRJbmZvIiwiUHJpY2luZ0NhcmRJY29uIiwiUHJpY2luZ0NhcmRQbGFuIiwiaDMiLCJQcmljaW5nQ2FyZENvc3QiLCJoNCIsIlByaWNpbmdDYXJkTGVuZ3RoIiwicCIsIlByaWNpbmdDYXJkRmVhdHVyZXMiLCJ1bCIsIlByaWNpbmdDYXJkRmVhdHVyZSIsImxpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBRUEsT0FBTyxNQUFNQyxjQUFjLDRCQUFHRCxNQUFNLENBQUNFLEdBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTjJCLENBQXBCO0FBU1AsT0FBTyxNQUFNQyxjQUFjLDRCQUFHSCxNQUFNLENBQUNFLEdBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWjJCLENBQXBCO0FBY1AsT0FBTyxNQUFNRSxjQUFjLDRCQUFHSixNQUFNLENBQUNLLEVBQUc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUwyQixDQUFwQjtBQU9QLE9BQU8sTUFBTUMsZ0JBQWdCLDRCQUFHTixNQUFNLENBQUNFLEdBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWjZCLENBQXRCO0FBY1AsT0FBTyxNQUFNSyxXQUFXLDRCQUFHUCxNQUFNLENBQUNELElBQUQsQ0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXpCd0IsQ0FBakI7QUEyQlAsT0FBTyxNQUFNUyxlQUFlLDRCQUFHUixNQUFNLENBQUNFLEdBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQNEIsQ0FBckI7QUFTUCxPQUFPLE1BQU1PLGVBQWUsNEJBQUdULE1BQU0sQ0FBQ0UsR0FBSTtBQUMxQztBQUNBLENBRjRCLENBQXJCO0FBSVAsT0FBTyxNQUFNUSxlQUFlLDRCQUFHVixNQUFNLENBQUNXLEVBQUc7QUFDekM7QUFDQTtBQUNBLENBSDRCLENBQXJCO0FBS1AsT0FBTyxNQUFNQyxlQUFlLDRCQUFHWixNQUFNLENBQUNhLEVBQUc7QUFDekM7QUFDQSxDQUY0QixDQUFyQjtBQUlQLE9BQU8sTUFBTUMsaUJBQWlCLDRCQUFHZCxNQUFNLENBQUNlLENBQUU7QUFDMUM7QUFDQTtBQUNBLENBSDhCLENBQXZCO0FBS1AsT0FBTyxNQUFNQyxtQkFBbUIsNkJBQUdoQixNQUFNLENBQUNpQixFQUFHO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUGdDLENBQXpCO0FBU1AsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUdsQixNQUFNLENBQUNtQixFQUFHO0FBQzVDO0FBQ0EsQ0FGK0IsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNpbmdTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxMHB4IDAgMTYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcmljaW5nV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2luZ0hlYWRpbmcgPSBzdHlsZWQuaDFgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNpbmdDYXJkID0gc3R5bGVkKExpbmspYFxyXG4gIGJhY2tncm91bmQ6ICMyNDI0MjQ7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDU2LCAxMjUsIDI1NSwgMC4yKTtcclxuICB3aWR0aDogMjkwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIGNvbG9yOiAjMWMyMjM3O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2luZ0NhcmRJbmZvID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2luZ0NhcmRJY29uID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDI0cHggMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljaW5nQ2FyZFBsYW4gPSBzdHlsZWQuaDNgXHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljaW5nQ2FyZENvc3QgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNpbmdDYXJkTGVuZ3RoID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2luZ0NhcmRGZWF0dXJlcyA9IHN0eWxlZC51bGBcclxuICBtYXJnaW46IDE2cHggMCAzMnB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhOWIzYzE7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2luZ0NhcmRGZWF0dXJlID0gc3R5bGVkLmxpYFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcbiJdfQ==