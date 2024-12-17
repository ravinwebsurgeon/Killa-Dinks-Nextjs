import { Box } from '@sanity/ui'
import { useMemo } from 'react'
import { useSchema } from 'sanity'
import { styled } from 'styled-components'

const StyledBox = styled(Box)`
  width: 200px;
`

export default function ProductPreview(props) {
  const {value, renderPreview} = props
  const productSchemaType = useSchema().get('product')
  const hasProduct = value?.productWithVariant?.product?._ref && productSchemaType

  const previewProps = useMemo(
    () => ({
      value: value?.productWithVariant?.product,
      schemaType: productSchemaType ,
      layout: 'default' ,
    }),
    [productSchemaType, value?.productWithVariant?.product]
  )

  return (
    <StyledBox padding={2}>
      {hasProduct && previewProps ? renderPreview(previewProps) : `No product selected`}
    </StyledBox>
  )
}
