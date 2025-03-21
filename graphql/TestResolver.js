const premiumAdjustments = [
  {
    id: "1",
    Comment_M: "Initial Adjustment",
    Total_Borrower_Fees_M: 100.0,
    CU_Retail_Rate: 2.5,
    Protected_Loan_Amount_M: 50000.0,
    Pay_Rate: 1.75,
    Premium_Due: 1500.0,
    Total_Amount: 51500.0,
  }
];

const resolvers = {
  Query: {
    getPremiumAdjustmentById: (_, { id }) => {
      return premiumAdjustments.find(pa => pa.id === id);
    }
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      const index = premiumAdjustments.findIndex(pa => pa.id === input.id);
      if (index === -1) {
        throw new Error("Premium Adjustment not found");
      }
      premiumAdjustments[index] = { ...premiumAdjustments[index], ...input };
      return premiumAdjustments[index];
    }
  }
};

export default resolvers;