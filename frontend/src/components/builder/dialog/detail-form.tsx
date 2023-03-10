import { Dialog, DialogContent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseDetailForm } from 'src/store/apps/page'
import FormManager from '../manager/form-manager'

const DetailForm = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openDetailForm, detailForm } = page

  return (
    <>
      <Dialog open={openDetailForm}>
        <CustomDialogTitle
          title="상세 폼 편집"
          onClose={() => {
            dispatch(hCloseDetailForm())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <FormManager _key="detailForm" list={detailForm} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DetailForm