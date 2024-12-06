import React from 'react';
import { TextInput, Tooltip, Box, Text, Stack } from '@sanity/ui';
import { set, unset } from 'sanity';

const CustomInputWithTooltip = React.forwardRef((props, ref) => {
  // const { type, value, onChange, inputComponent } = props;

  return (
    <Stack space={2}>
      <Box>
        <Text>
          {/* {type.title}{' '} */}
          Hello
          <Tooltip
            content={
              <Box padding={2}>
                <Text size={1}>{type.description}</Text>
              </Box>
            }
            placement="top"
          >
            <span style={{ cursor: 'help', textDecoration: 'underline' }}>?</span>
          </Tooltip>
        </Text>
      </Box>
      <TextInput
        ref={ref}
        type="text"
        value={value || 'Tool tip content'}
        onChange={event => onChange(event.target.value ? set(event.target.value) : unset())}
        placeholder={type.placeholder}
      />
    </Stack>
  );
});

export default CustomInputWithTooltip;
