import styled from "styled-components/macro";

export const NavFooter = styled.div`
  background-color: #232F3E;
  margin: 30px 0 8px 0;
  padding: 0 7px;

  font-size: 1rem;
  line-height: 19px;
  color: #111;
`;



export const NavBackToTop = styled.a`
  cursor: pointer;
  color: #004B91;
  text-decoration: none;
`;

export const NavFooterBackToTop = styled.div`
  box-sizing: border-box;
  margin-bottom: 40px;
  background-color: #37475A;
  color: #004B91;

  span {
    color: white;
    text-align: center;
    padding: 15px 0;
    font-size: 13px;
  }
`;

export const NavFooterVerticalColumn = styled.div`
  box-sizing: border-box;
  display: table;
  margin: 0 auto;

`;

export const NavFooterLine = styled.div`
  border-top: 1px solid #3a4553;
  margin-top: 40px;
`;

export const NavFooterPadItemLine = styled.div`
  margin: 10px auto;
  text-align: center;
  color: #767676;
`;

export const NavFooterLogoLine = styled.span`
  margin: 30px auto 15px;
  box-sizing: border-box;
`;

export const NavFooterCopyright = styled.div`
  background-color: #131A22;
  margin: 0;
  padding: 10px 0 30px;
  color: #767676;
  white-space: nowrap;
  box-sizing: border-box;

  ul, li {
    display: inline;
    margin: 0;
    color: #111;
  }
`;