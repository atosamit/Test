import { gql } from 'apollo-server';

const typeDefs = `

type Query {
  getPremiumAdjustmentById(id: ID!): PremiumAdjustment
}

type Mutation {
  editPremiumAdjustment(input: EditPremiumAdjustmentInput!): PremiumAdjustment
}

type PremiumAdjustment {
  id: ID!
  Comment_M: String!
  Total_Borrower_Fees_M: Float!
  CU_Retail_Rate: Float!
  Protected_Loan_Amount_M: Float!
  Pay_Rate: Float!
  Premium_Due: Float!
  Total_Amount: Float!
}

input EditPremiumAdjustmentInput {
  id: ID!
  Comment_M: String!
  Total_Borrower_Fees_M: Float!
  CU_Retail_Rate: Float!
  Protected_Loan_Amount_M: Float!
  Pay_Rate: Float!
  Premium_Due: Float!
  Total_Amount: Float!
}

`;

export default typeDefs;