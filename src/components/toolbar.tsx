import { MessageSquareTextIcon, Pencil, Smile, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Hint } from "./hints";
import { EmojiPopover } from "./emoji-popover";

interface ToolbarProps {
  isAuthor: boolean;
  isPending: boolean;
  handleEdit: () => void;
  handleThread: () => void;
  handleDelete: () => void;
  handleReaction: (value: string) => void;
  hideThreadButton?: boolean;
}

export const Toolbar = ({
  isAuthor,
  isPending,
  handleEdit,
  handleThread,
  handleDelete,
  handleReaction,
  hideThreadButton,
}: ToolbarProps) => {
  return (
    <div className="absolute top-0 right-5">
      <div className="group-hover:opacity-100 opacity-0 transition-opacity border bg-white dark:bg-gray-800 dark:border-gray-700 rounded-md shadow-sm flex items-center space-x-2 p-2">
        <EmojiPopover
          hint="Add reaction"
          onEmojiSelect={(emoji) => handleReaction(emoji.id)}
        >
          <Button variant="ghost" size="iconSm" disabled={isPending}>
            <Smile className="size-4 text-gray-700 dark:text-gray-300" />
          </Button>
        </EmojiPopover>
        {!hideThreadButton && (
          <Hint label="Reply in thread">
            <Button variant="ghost" size="iconSm" disabled={isPending} onClick={handleThread}>
              <MessageSquareTextIcon className="size-4 text-gray-700 dark:text-gray-300" />
            </Button>
          </Hint>
        )}
        {isAuthor && (
          <Hint label="Edit message">
            <Button variant="ghost" size="iconSm" disabled={isPending} onClick={handleEdit}>
              <Pencil className="size-4 text-gray-700 dark:text-gray-300" />
            </Button>
          </Hint>
        )}
        {isAuthor && (
          <Hint label="Delete message">
            <Button variant="ghost" size="iconSm" disabled={isPending} onClick={handleDelete}>
              <Trash className="size-4 text-gray-700 dark:text-gray-300" />
            </Button>
          </Hint>
        )}
      </div>
    </div>
  );
};
