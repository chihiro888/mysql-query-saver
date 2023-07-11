import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Grid,
  Typography
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hClosePartSelector,
  hOpenDefaultPart,
  hOpenLinePart,
  hOpenSelectPart,
  hOpenTableActionPart,
  hOpenTableChipPart,
  hOpenTableDefaultPart,
  hOpenTableImagePart,
  hOpenTableModalPart,
  hOpenTableSnackbarPart,
  hOpenTextareaPart,
  hOpenUploadPart,
  setClearInput,
  updateState
} from 'src/store/apps/page'
import { addPart } from 'src/utils/page'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useEffect, useState } from 'react'

const PartSelector = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openPartSelector, partType } = page

  const hoverStyle = {
    '&:hover': {
      border: '1px solid #00FF00',
      color: 'gray',
      backgroundColor: 'lightblue'
    }
  }

  // ** State
  const searchPartList = [
    {
      type: 'text',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    },
    {
      type: 'select',
      icon: 'mdi:alpha-s-box-outline',
      title: 'Select Box'
    },
    {
      type: 'date',
      icon: 'system-uicons:calendar-date',
      title: 'Date Picker'
    }
  ]

  const addPartList = [
    {
      type: 'text',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    },
    {
      type: 'number',
      icon: 'mdi:number-1-circle-outline',
      title: 'Number Field'
    },
    {
      type: 'textarea',
      icon: 'bi:textarea-t',
      title: 'Text Area'
    },
    {
      type: 'password',
      icon: 'mdi:password',
      title: 'Password Field'
    },
    {
      type: 'upload',
      icon: 'material-symbols:upload-file-sharp',
      title: 'Upload'
    },
    {
      type: 'editor',
      icon: 'material-symbols:edit-document-outline',
      title: 'Editor'
    },
    {
      type: 'select',
      icon: 'mdi:alpha-s-box-outline',
      title: 'Select Box'
    },
    {
      type: 'line',
      icon: 'material-symbols:line-end',
      title: 'Line'
    }
  ]

  const detailPartList = [
    {
      type: 'text',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    }
  ]

  const tablePartList = [
    {
      type: 'text',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    },
    {
      type: 'image',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Image'
    },
    {
      type: 'date',
      icon: 'system-uicons:calendar-date',
      title: 'Date'
    },
    {
      type: 'chip',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Chip'
    },
    {
      type: 'modal',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Modal window'
    },
    {
      type: 'snackbar',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Snackbar'
    },
    {
      type: 'action',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Action button'
    }
  ]

  const [partList, setPartList] = useState([])

  // 파츠 목록 초기화
  useEffect(() => {
    if (partType === 'add' || partType === 'action') setPartList(addPartList)
    else if (partType === 'search') setPartList(searchPartList)
    else if (partType === 'detail') setPartList(detailPartList)
    else if (partType === 'table') setPartList(tablePartList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partType])

  return (
    <>
      <Dialog open={openPartSelector}>
        <CustomDialogTitle
          title="파츠 선택"
          onClose={() => {
            dispatch(hClosePartSelector())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          {partList.map((part, index) => {
            return (
              <>
                <Card
                  key={index}
                  onClick={() => {
                    dispatch(setClearInput())
                    dispatch(
                      updateState({ key: 'partSubType', value: part.type })
                    )
                    if (partType === 'table') {
                      const defaultCondition =
                        part.type === 'text' || part.type === 'date'
                      const imageCondition = part.type === 'image'
                      const chipCondition = part.type === 'chip'
                      const modalCondition = part.type === 'modal'
                      const snackbarCondition = part.type === 'snackbar'
                      const actionCondition = part.type === 'action'

                      if (defaultCondition) {
                        dispatch(hOpenTableDefaultPart())
                      } else if (imageCondition) {
                        dispatch(hOpenTableImagePart())
                      } else if (chipCondition) {
                        dispatch(hOpenTableChipPart())
                      } else if (modalCondition) {
                        dispatch(hOpenTableModalPart())
                      } else if (snackbarCondition) {
                        dispatch(hOpenTableSnackbarPart())
                      } else if (actionCondition) {
                        dispatch(hOpenTableActionPart())
                      }
                    } else {
                      const defaultCondition =
                        part.type === 'text' ||
                        part.type === 'number' ||
                        part.type === 'password' ||
                        part.type === 'editor' ||
                        part.type === 'text' ||
                        part.type === 'date'
                      const lineCondition = part.type === 'line'
                      const selectCondition = part.type === 'select'
                      const uploadCondition = part.type === 'upload'
                      const textareaCondition = part.type === 'textarea'

                      if (defaultCondition) {
                        dispatch(hOpenDefaultPart())
                      } else if (lineCondition) {
                        dispatch(hOpenLinePart())
                      } else if (selectCondition) {
                        dispatch(hOpenSelectPart())
                      } else if (uploadCondition) {
                        dispatch(hOpenUploadPart())
                      } else if (textareaCondition) {
                        dispatch(hOpenTextareaPart())
                      }
                    }
                  }}
                  sx={{
                    boxShadow: 0,
                    '&:hover': {
                      boxShadow: '0px 0px 0px 2px rgba(50, 71, 92, 0.1)'
                    },
                    border: 0,
                    color: '#707070',
                    backgroundColor: '#f6f6f8',
                    mb: 3,
                    cursor: 'pointer'
                  }}
                >
                  <CardContent style={{ padding: '10px' }}>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Icon icon={part.icon} />
                      </Grid>
                      <Grid item>
                        <Typography>{part.title}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </>
            )
          })}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PartSelector