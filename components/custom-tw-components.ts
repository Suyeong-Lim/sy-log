import { css } from "@emotion/react";
import tw from "twin.macro";

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
