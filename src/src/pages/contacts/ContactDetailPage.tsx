
import DetailPageHeaderAction from '../../components/page-parts/DetailPageHeaderAction'
import { PageHeader } from '../../components/page-parts/PageHeader'
import { Card } from '../../components/ui-parts/Card'

export const ContactDetailPage = () => {
  return (
    <>
      <PageHeader pageTitle={"Contacts"}>
        <DetailPageHeaderAction />
      </PageHeader>
      <Card>
        <h1>Hello</h1>
      </Card>

    </>
  )
}
