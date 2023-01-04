import { useState } from 'react'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import AddContainer from 'src/components/core/add-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'
import Content from 'src/components/admin/content'

const Admin = () => {
  // NOTE 헤더 설정
  const header = {
    title: '관리자 관리',
    subTitle: '관리자를 관리할 수 있습니다.'
  }

  // NOTE 추가 폼 설정
  const [addForm, setAddForm] = useState([
    {
      type: 'text',
      label: '계정',
      key: 'account',
      value: ''
    },
    {
      type: 'password',
      label: '비밀번호',
      key: 'password',
      value: ''
    },
    {
      type: 'text',
      label: '사용자명',
      key: 'username',
      value: ''
    },
    {
      type: 'select',
      label: '시스템관리자',
      key: 'isSystemAdmin',
      value: '',
      list: [
        {
          label: '활성화',
          value: 1
        },
        {
          label: '비활성화',
          value: 0
        }
      ]
    },
    {
      type: 'select',
      label: '관리자',
      key: 'isAdmin',
      value: '',
      list: [
        {
          label: '활성화',
          value: 1
        },
        {
          label: '비활성화',
          value: 0
        }
      ]
    }
  ])

  // NOTE 검색 폼 설정
  const [searchForm, setSearchForm] = useState([
    {
      type: 'text',
      label: '계정',
      key: 'account',
      value: ''
    },
    {
      type: 'select',
      label: '권한',
      key: 'level',
      value: '',
      list: [
        {
          label: '시스템관리자',
          value: 'SA'
        },
        {
          label: '관리자',
          value: 'A'
        }
      ]
    },
    {
      type: 'date',
      label: '생성일자',
      key: 'createdAt',
      value: ''
    }
  ])

  // NOTE 테이블 헤더 정의
  const tableHeader = [
    '아이디',
    '계정',
    '비밀번호',
    '사용자명',
    '권한',
    '생성일자',
    '수정일자',
    '액션'
  ]

  // NOTE 페이지네이션 정의
  const [pagination, setPagination] = useState<any>({
    count: 0,
    data: [],
    activePage: 1
  })

  return (
    <>
      <HeaderContainer header={header} />
      <AddContainer addForm={addForm} setAddForm={setAddForm} />
      <SearchContainer searchForm={searchForm} setSearchForm={setSearchForm} />
      <ListContainer
        tableHeader={tableHeader}
        content={<Content pagination={pagination} />}
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  )
}

export default Admin
