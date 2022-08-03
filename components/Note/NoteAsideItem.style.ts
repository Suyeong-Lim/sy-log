import styled from "@emotion/styled";

export const NoteContainer = styled.div`
  display: flex;
`;
export const Category = styled.div`
  color: var(--accent);
`;

export const CategoryItemList = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: block;
    color: var(--text-base-70);
    &:hover {
      opacity: 1;
      background: var(--hover-base);
    }
  }
`;
