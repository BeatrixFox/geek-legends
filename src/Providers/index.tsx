import { ReactNode } from "react";
import { MultimediaProvider } from "./multimedia/";
import { StoreProvider } from "./store/";
import { AuthProvider } from "./user";
import { XFileProvider } from "./xfile";
import { GroupProvider } from "./group";
import { MyStoresProvider } from "./myStore";
import { MessagesProvider } from "./message";
import { TalksProvider } from "./talk";
import { MyMultimediasProvider } from "./myMultimedias";
import { MyPersonasProvider } from "./myPersonas";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <MultimediaProvider>
        <MyMultimediasProvider>
          <XFileProvider>
            <StoreProvider>
              <GroupProvider>
                <MyPersonasProvider>
                  <MyStoresProvider>
                    <MessagesProvider>
                      <TalksProvider>{children}</TalksProvider>
                    </MessagesProvider>
                  </MyStoresProvider>
                </MyPersonasProvider>
              </GroupProvider>
            </StoreProvider>
          </XFileProvider>
        </MyMultimediasProvider>
      </MultimediaProvider>
    </AuthProvider>
  );
};

export default Providers;
