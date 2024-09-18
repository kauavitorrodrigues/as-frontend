import { toast } from "./use-toast";

export const useDisplayAlertToast = (isSuccess: boolean, errorMessage?: string, successMessage?: string) => {

    const defaultErrorMessage = "Houve um problema com a operação. Tente novamente mais tarde.";

    toast({
        title: isSuccess ? "Sucesso!" : "Ops! Algo deu errado.",
        variant: isSuccess ? "default" : "destructive",
        description: isSuccess ? successMessage : errorMessage || defaultErrorMessage,
    });
    
};
