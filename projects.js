import featured from './featured.json'

const Projects = () => {
  return (
    <PageWrap title='Projects'>
      <CardList cards={featured} />
      <ProjectList projects={projectList} />
    </PageWrap>
  )
}

export default Projects