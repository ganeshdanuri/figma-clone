"use client";

import Room from "./Pages/Room";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import { LiveMap } from "@liveblocks/client";
import Loader from "./components/Loader";

const App = () => {
  return (
    <NextUIProvider>
      <RoomProvider
        id="my-room"
        initialPresence={{
          cursor: null,
          cursorColor: null,
          editingText: null,
        }}
        initialStorage={{
          canvasObjects: new LiveMap(),
        }}
      >
        <ClientSideSuspense fallback={<Loader />}>
          {() => <Room />}
        </ClientSideSuspense>
      </RoomProvider>
    </NextUIProvider>
  );
};

export default App;
