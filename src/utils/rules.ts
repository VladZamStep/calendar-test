export const rules = {
    required: (message: string = 'Обязательное поле!') => {
        return {
            required: true,
            message
        };
    }
};