import { HttpError } from "services/utils";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthContext } from "./AuthProvider";

export const MyQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const authContext = useAuthContext();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
        onError: (error) => {
          if (error instanceof HttpError) {
            if (error.status === 401) {
              authContext?.setAuthenticated(false);
            }
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
