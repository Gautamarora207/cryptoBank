import { deployments } from "@poofcash/poof-kit";
import Fraction from "fraction.js";
import { getNoteStringAndCommitment } from "./snarks-functions";

export const MAX_NOTES = 10;

export const getNotes = (
  amount: string,
  currency: string,
  chainId: any
) => {
  if (Number(amount) === 0 || isNaN(Number(amount))) {
    return { notes: [], amount: 0 };
  }
  const res: any[] = [];
  const denominations = Object.keys(
    deployments[`netId${chainId}`][currency.toLowerCase()].instanceAddress
  )
    .sort()
    .reverse()
    .map((d) => new Fraction(d));

  let tempAmount = new Fraction(amount);
  for (const denomination of denominations) {
    const quantity = tempAmount.div(denomination).floor();
    for (let i = new Fraction(0); i.compare(quantity) < 0; i = i.add(1)) {
      if (res.length >= MAX_NOTES) {
        break;
      }
      res.push(
        getNoteStringAndCommitment(currency, denomination.toString(), chainId)
      );
      tempAmount = tempAmount.sub(denomination);
    }
  }
  return {
    notes: res,
    amount: new Fraction(amount).sub(tempAmount).toString(),
  };
};
