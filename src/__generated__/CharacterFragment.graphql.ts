/**
 * @generated SignedSource<<cdec225afd673352b3e86f3650180935>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CharacterFragment$data = {
  readonly image: string | null | undefined;
  readonly name: string | null | undefined;
  readonly species: string | null | undefined;
  readonly " $fragmentType": "CharacterFragment";
};
export type CharacterFragment$key = {
  readonly " $data"?: CharacterFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CharacterFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CharacterFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "species",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
      "storageKey": null
    }
  ],
  "type": "Character",
  "abstractKey": null
};

(node as any).hash = "61020a09cadc5376b11644ad1a0c9dfb";

export default node;
