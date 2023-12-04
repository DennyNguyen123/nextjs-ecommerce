import { useStoreModal } from "@/hooks/use-store-modal";
import { Store } from "@prisma/client";
import { PopoverTrigger, PopoverTriggerProps } from "@radix-ui/react-popover";

type PopupverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  className,
  items = [],
}: StoreSwitcherProps) {
  const storeModal = useStoreModal();

  return (
    <>
      <div>Store Switcher</div>
    </>
  );
}
