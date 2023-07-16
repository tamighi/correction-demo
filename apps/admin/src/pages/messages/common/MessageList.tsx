import { useIsSmall } from "hooks";

import MessageListDesktop from "./MessageListDesktop";
import MessageListMobile from "./MessageListMobile";

type MessageResourceString = "question" | "review" | "devis";

type MessageListProps<R extends MessageResourceString> = {
  resource: R;
};

const MessageList = <R extends MessageResourceString>(
  props: MessageListProps<R>
) => {
  const { resource } = props;
  const isSmall = useIsSmall();

  return (
    <>
      {isSmall ? (
        <MessageListMobile resource={resource} />
      ) : (
        <MessageListDesktop resource={resource} />
      )}
    </>
  );
};

export default MessageList;
