"use client";

import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function Home() {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <div className="p-10">
      {/* <UserButton afterSignOutUrl="/" />

      <Modal title="test" description="test desc" isOpen onClose={() => {}}>
        Children
      </Modal> */}
      Root Page
    </div>
  );
}
