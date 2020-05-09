import clsx from 'clsx';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import { allClasses } from '../utils/constants';
import { SnackbarItemProps } from './SnackbarItem';
import { Snack } from '../SnackbarProvider';

const DIRECTION = {
    right: 'left',
    left: 'right',
    bottom: 'up',
    top: 'down',
} as const;
export type DirectionType = typeof DIRECTION[keyof typeof DIRECTION]

export const getTransitionDirection = (anchorOrigin: Snack['anchorOrigin']): DirectionType => {
    if (anchorOrigin.horizontal !== 'center') {
        return DIRECTION[anchorOrigin.horizontal];
    }
    return DIRECTION[anchorOrigin.vertical];
};

/**
 * Omit all class keys except what we need for collapse component
 */
export const omitNonCollapseKeys = (classes: SnackbarItemProps['classes'], dense: SnackbarItemProps['dense']): { container: string; wrapper: string } => ({
    container: classes.collapseContainer,
    wrapper: clsx(classes.collapseWrapper, { [classes.collapseWrapperDense]: dense }),
});
