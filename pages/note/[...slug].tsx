import { allNotes, Note } from ".contentlayer/generated";
import { PathSegment, TreeNode } from "lib/types";
import { InferGetStaticPropsType } from "next";
import NoteLayout from "layouts/note";
import note from "layouts/note";

const NotePostPate = ({
  note,
  tree,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("??");
  return <NoteLayout post={note} tree={tree} />;
};

//렌더링할 전체 slug 제목들을 불러온다.
//paths [
//   [ 'algorithm', '2ndTest' ],
//   [ 'algorithm' ],
//   [ 'algorithm', 'test' ]
// ]
export const getStaticPaths = async () => {
  const paths = allNotes.map((note) => ({
    params: {
      slug: note.pathSegments.map((_: PathSegment) => _.pathName),
    },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }: any) => {
  const pagePath = params.slug.join("/");
  // console.log("pagePath", pagePath);
  // console.log("allNotes", allNotes);
  //pagePath = algorithm+test 과 같은 단일 note 를 찾는다.
  const note = allNotes.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === pagePath
  )!;

  const tree = buildTree(allNotes);
  console.log("tree", tree);

  // //모든 노트들의 정보를 가지고 트리를 구성하고 각 상세 노트의 url 을 만들어주어야함..

  // const noteList = allNotes.filter(
  //   (_) =>
  //     _.pathSegments.length === 2 &&
  //     _.pathSegments
  //       .map((_) => _.pathName)
  //       .join("/")
  //       .startsWith(pagePath.join("/"))
  // );

  // //각 노트의 url 을 만들어 주었다.
  // const noteLink = noteList.map((doc) =>
  //   doc.pathSegments.map((_) => _.pathName).join("/")
  // );

  // console.log("noteList", noteList);
  // console.log("noteLink", noteLink);

  return { props: { note, tree } };
};

const buildTree = (
  notes: Note[],
  parentPathNames: string[] = []
): TreeNode[] => {
  const level = parentPathNames.length;
  return notes
    .filter(
      (_) =>
        _.pathSegments.length === level + 1 &&
        _.pathSegments
          .map((_: PathSegment) => _.pathName)
          .join("/")
          .startsWith(parentPathNames.join("/"))
    )
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map<TreeNode>((doc) => ({
      title: doc.title,
      date: doc.date,
      urlPath:
        "/note/" +
        doc.pathSegments.map((_: PathSegment) => _.pathName).join("/"),
      children: buildTree(
        notes,
        doc.pathSegments.map((_: PathSegment) => _.pathName)
      ),
    }));
};
export default NotePostPate;
