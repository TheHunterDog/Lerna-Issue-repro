import React from 'react';
import { Foo } from '@lerna-issue-repro/foo/foo';

export const Bar: React.FC= ({ styleIndex, ...rest }) => (
	<Foo/>
);
