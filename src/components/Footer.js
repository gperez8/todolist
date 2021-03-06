import React from 'react';
import { VisibilityFilters } from '../actions/actionTypes';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
	<div>	
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>
			All
		</FilterLink>

		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
			Active
		</FilterLink>
		
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
			Completed
		</FilterLink>
	</div>
);

export default Footer;