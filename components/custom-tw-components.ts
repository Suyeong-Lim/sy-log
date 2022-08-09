import tw, { styled, css } from "twin.macro";

//Post
export const PostTitle = tw.h1`
text-text_base
text-3xl
font-bold

`;

//NoteAside Component
export const NoteAsideContainer = tw.section`
    w-[100%]
    pr-8
    pt-5
    relative
    flex
    flex-col
    overflow-y-scroll
    duration-300
    mr-2
`;

export const AsideItemTitle = tw.div`

`;

export const PostContainer = tw.div`
    mb-20
`;

export const NoteContainer = tw.div`
    flex
`;

export const CategoryTitle = tw.div`
    text-text_base
    font-bold

`;

export const CategoryItemList = tw.div`
    flex
    flex-col
    pl-1
`;

export const Main = tw.div``;
export const Content = tw.div`max-w-4xl`;

export const MainStyle = styled(Main)`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

  &:before {
    background: radial-gradient(circle, rgba(2, 0, 36, 0) 0, var(--gray1) 100%);
    position: absolute;
    content: "";
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
  }

  &:after {
    content: "";

    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.2;
    filter: invert(1);

    @media (prefers-color-scheme: dark) {
      filter: unset;
    }
  }
`;

export const ContentStyle = styled(Content)`
  height: fit-content;
  position: relative;
  z-index: 3;
  width: 100%;

  &:after {
    background-image: radial-gradient(
        at 27% 37%,
        hsla(215, 98%, 61%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 97% 96%, hsla(48, 60%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 10% 29%, hsla(167, 96%, 67%, 1) 0px, transparent 50%),
      radial-gradient(at 52% 99%, hsla(352, 98%, 61%, 1) 0px, transparent 50%),
      radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
    position: absolute;
    content: "";
    z-index: 2;
    width: 100%;
    height: 100%;
    filter: blur(100px) saturate(150%);
    z-index: -1;
    top: 80px;
    opacity: 0.2;
    transform: translateZ(0);

    @media (prefers-color-scheme: dark) {
      opacity: 0.1;
    }
  }
`;

export const ContentWrapper = tw.div``;

export const ContentWrpperStyle = styled(ContentWrapper)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 3px;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 252, 249, 0.388);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 0px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 0px rgba(40, 40, 40, 0.35) solid;
  border-right: 0px rgba(40, 40, 40, 0.35) solid;
`;
