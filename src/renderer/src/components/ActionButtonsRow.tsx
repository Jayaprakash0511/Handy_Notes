import { DeleteNoteButton, NewNoteButton, BackButton } from '@/components'
import { ComponentProps } from 'react'

type ActionButtonsRowProps = {
  setClicked: (value: boolean) => void; // or whatever the expected type is
} & ComponentProps<'div'>;


export const ActionButtonsRow: React.FC<ActionButtonsRowProps> = ({ setClicked, ...props }) => {
    return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
      <BackButton setClicked={setClicked} />
    </div>
  )
}
