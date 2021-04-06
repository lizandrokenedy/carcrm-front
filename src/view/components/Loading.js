import { CircularProgress, Modal, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeLoading } from '../../store/actions/loading.action';

export default function Loading() {


    const dispatch = useDispatch();
    const loading = useSelector(state => state.loadingReducer)

    return (
        <div>
            <Modal
                open={loading.open}
                onClose={() => dispatch(changeLoading({ open: false }))}
                className="d-flex justify-content-center align-items-center h-100"
            >
                <div className="bg-white d-flex align-items-center rounded-lg p-3">
                    <CircularProgress size={20} className="mr-3" />
                    <Typography variant="subtitle1">{loading.msg}</Typography>
                </div>
            </Modal>
        </div>
    )
}
