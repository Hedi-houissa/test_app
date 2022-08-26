import styled, { css } from 'styled-components';
import { device } from '@styles/mediaQueriesBreakpoints';

const Content = styled.div`
background-color:${({ backgroundColor }) => backgroundColor};
width: ${({ width }) => width||'20%'};  
height: ${({ height }) => height||'20%'};  
margin: ${({ margin }) => margin || '1%'};
padding: ${({ padding }) => padding || '1%'};
font-size: ${({ fontSize }) => fontSize || '25px'};
text-align: ${({ textAlign }) => textAlign || 'left'};
color: ${({color}) => color||'#ffffff'};

`;
const DrawerBtn = styled.div`
display: flex;
height: 50px;
width: 20px;
background-color: ;

`
const DrawerContainer = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  height: 100%;
  width: 100%;
  border-top: 1px solid #e7ecf1;
`;
const PageContent = styled.div`
  height: 100%;
  width: 100%;
`;
const SideBar = styled.div`
  @media ${device.md} {
    position: fixed;
    bottom: 0;
    z-index: 1999;
    background-color: white;
    width: 100%;
    border-top: 1px solid #e7ecf1;
  }
  border-right: 1px solid #e7ecf1;
  text-align: center;
  max-width: 100%;
  ${({ show }) =>
    show
      ? css`
          display: block;
          @media ${device.md} {
            display: flex;
          }
        `
      : css`
          display: none;
          @media ${device.md} {
            display: none;
          }
        `}
  ${({ open }) =>
    !open
      ? css`
          width: 56px;
        `
      : css`
          width: auto;
          padding-left: 8px;
          padding-right: 8px;
          @media ${device.md} {
            padding: 0;
          }
        `}
`;

const MenuDrawer = styled(DrawerBtn)`
  & .txt {
    font-family: Red Hat Text;
    font-size: 22px;
    color: #e20080;
  }
  @media ${device.md} {
    display: none;
  }
`;
const ToolBar = styled.div`
  width: 100%;
  border-bottom: 1px solid #e7ecf1;
`;
const SubDrawer = styled.div`
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  ${({ open }) =>
    !open
      ? css`
          .navContainer {
            padding: 0;
          }
        `
      : css`
          .navContainer {
            margin-left: 40px;
            height: fit-content;
          }
        `}
  @media ${device.md} {
    .navContainer {
      position: absolute;
      z-index: 1001;
      margin-left: 0;
      width: 100%;
      height: fit-content;
      background-color: #ffffff;
      bottom: 100%;
      left: 0;
    }
    ${({ openNav }) =>
      !openNav
        ? css`
            .navContainer {
              display: none;
            }
          `
        : css`
            .navContainer {
              display: block;
            }
          `}
  }
`;
const SubDrawerHead = styled.div`
  margin: 5px auto;
  display: flex;
  align-items: center;
  border: none;
  height: 40px;
  box-sizing: border-box;
  font-family: 'Red Hat Text';
  font-weight: 700;
  cursor: pointer;
  & .icons {
    height: 40px;
    display: flex;
    align-items: center;
  }
  & .subTitle {
    font-size: 0.625rem;
    display: none;
  }
  .txt {
    font-size: 0.833rem;
    margin-left: 5px;
  }
  ${({ active }) =>
    !active
      ? css`
          color: #515154;
          background-color: #ffffff;
        `
      : css`
          @media ${device.md} {
            & .subTitle {
              color: #e20080;
            }
          }
        `}
  ${({ open }) =>
    !open
      ? css`
          width: 40px;
          justify-content: center;
          & .txt {
            display: none;
          }
        `
      : css`
          width: ${({ openWidth }) => openWidth || '200px'};
          padding-left: 10px;
          justify-content: flex-start;
          & .txt {
            display: block;
          }
          @media ${device.md} {
            padding: 0;
            width: fit-content;
            justify-content: center;
            & .txt {
              display: none;
            }
          }
        `}
        @media ${device.md} {
    border-radius: 0;
    background-color: #ffffff;
    flex-direction: column;
    & .icons {
      border-radius: 16px;
    }
    & .subTitle {
      display: block;
    }
    &:hover {
      cursor: pointer;
      box-shadow: none;
    }
    & .icons {
      &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px
          ${({ theme }) => transparentize(0.75, theme.palette.black)};
      }
    }
  }
`;
const SubBtn = styled.button`
  margin: 5px auto;
  display: flex;
  align-items: center;
  border: none;
  height: 40px;
  box-sizing: border-box;
  font-family: 'Red Hat Text';
  font-weight: 700;
  & .icons {
    height: 40px;
    display: flex;
    align-items: center;
  }
  & .txt {
    font-size: 0.833rem;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px
      ${({ theme }) => transparentize(0.75, theme.palette.black)};
  }
  ${({ bordered }) =>
    !bordered
      ? css`
          border-radius: 16px;
          ${({ active }) =>
            !active
              ? css`
                  color: #515154;
                  background-color: #ffffff;
                `
              : css`
                  color: #e20080;
                  background-color: #ffe2e7;
                  @media ${device.md} {
                    & .icons {
                      background-color: #ffe2e7;
                    }
                  }
                `}
          ${({ open }) =>
            !open
              ? css`
                  width: 40px;
                  justify-content: center;
                  & .txt {
                    display: none;
                  }
                `
              : css`
                  width: ${({ openWidth }) => openWidth || '200px'};
                  padding-left: 10px;
                  justify-content: flex-start;
                  & .txt {
                    display: block;
                  }
                  @media ${device.md} {
                    padding: 0;
                    justify-content: center;
                  }
                `}
        `
      : css`
          border: 1px solid #e20080;
          ${({ active }) =>
            !active
              ? css`
                  color: #515154;
                  background-color: #ffffff;
                `
              : css`
                  color: #e20080;
                  background-color: #ffe2e7;
                  @media ${device.md} {
                    background-color: #ffffff;
                    & .icons {
                      background-color: #ffe2e7;
                    }
                  }
                `}
          ${({ open }) =>
            !open
              ? css`
                  border-radius: 50%;
                  width: 40px;
                  justify-content: center;
                  & .txt {
                    display: none;
                  }
                  @media ${device.md} {
                    border-radius: 0;
                    & .icons {
                      border-radius: 50%;
                    }
                  }
                `
              : css`
                  width: ${({ openWidth }) => openWidth || '200px'};
                  border-radius: 20px;
                  padding-left: 10px;
                  justify-content: flex-start;
                  & .txt {
                    display: block;
                  }
                `}
              @media ${device.md} {
            border: none;
            & .icons {
              border: 1px solid #e20080;
              border-radius: 50%;
            }
          }
        `}
`;
export {
  DrawerContainer,
  DrawerBtn,
  SideBar,
  PageContent,
  ToolBar,
  MenuDrawer,
  SubDrawer,
  SubDrawerHead,
  SubBtn,
  Content
};
