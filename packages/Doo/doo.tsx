import React from 'react';
import { Foo } from '@lerna-issue-repro/foo/foo';

export const Doo: React.FC = ({ styleIndex, ...rest }) => (
	<Foo />
);
