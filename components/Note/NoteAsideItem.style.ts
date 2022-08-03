import styled from "@emotion/styled";

export const CategoryTitle = styled.div`
  color: var(--accent);
  font-weight: 700;
`;
export const CategoryItemList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5em;
  a {
    display: block;
    color: var(--text-base-70);
    padding: 0.25rem;
    &:hover {
      opacity: 1;
      background: var(--hover-base);
    }
  }
`;
