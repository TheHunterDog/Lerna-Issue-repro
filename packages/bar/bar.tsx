import React from 'react';
import { Foo } from '@lerna-issue-repro/foo/foo';

export const bar: React.FC= ({ styleIndex, ...rest }) => (
	<Foo/>
);
