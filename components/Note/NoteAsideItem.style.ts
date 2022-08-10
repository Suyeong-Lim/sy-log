import styled from "@emotion/styled";

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
      color: #5989c3;
    }
  }
`;
