export class FormatParser {
    public static parsePtBrDateToIsoDate(date: string | Date | null) {
        if (date instanceof Date) {
            return date
        }

        if (!date) {
            return new Date()
        }

        const explodeDate = date.split('/')

        return new Date(Number.parseInt(explodeDate[2]), Number.parseInt(explodeDate[1]) - 1, Number.parseInt(explodeDate[0]))
    }
}