class ProgressionService {
    getPercentageComplete(goalXP: number, startedXP: number, currentXP: number): number {

        const differenceStartToEnd: number = goalXP - startedXP;
        const differenceStartToCurrent: number = currentXP - startedXP;

        if (differenceStartToCurrent > 0 && differenceStartToCurrent / differenceStartToEnd <= 1) {
            return Math.floor((differenceStartToCurrent / differenceStartToEnd) * 100);
        } else if (differenceStartToCurrent / differenceStartToEnd > 1) {
            return 100;
        }
        return 0;

    }
}

export default new ProgressionService();
