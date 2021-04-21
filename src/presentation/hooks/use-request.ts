import { useCallback, useState } from "react";
import { BadRequestError } from "../../communication/fetchers";

interface Props<Data> {
  request: () => Promise<Data>;
}

const useRequest = <Data>({ request }: Props<Data>) => {
  const [data, setData] = useState<Data | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const execute = useCallback(async () => {
    try {
      setError(undefined);
      setLoading(true);
      const data = await request();
      setData(data);
    } catch (e) {
      if (e instanceof BadRequestError) {
        setError(e.data.map((error) => error.message).join("\n"));
      } else {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  }, [request]);

  return { execute, data, loading, error };
};

export default useRequest;
