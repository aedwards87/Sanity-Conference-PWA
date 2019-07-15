import icon from 'react-icons/lib/md/person'

export default {
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname (Post-nominal)" format'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'text'
    },
  ],
  preview: {
    select: {title: 'name',  media: 'photo'}
  }
}
