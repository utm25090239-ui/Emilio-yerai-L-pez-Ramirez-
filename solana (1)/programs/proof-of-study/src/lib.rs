use anchor_lang::prelude::*;

declare_id!("2JQjSjDSnzPnr3eDmqzZc4X3p22iHpfPwVtpJ7GWqACD");

#[program]
pub mod proof_of_study {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let account = &mut ctx.accounts.study_account;
        account.owner = *ctx.accounts.user.key;
        account.hours = 0;
        account.sessions = 0;
        Ok(())
    }

    pub fn add_hours(ctx: Context<AddHours>, hours: u32) -> Result<()> {
        let account = &mut ctx.accounts.study_account;

        account.hours += hours;
        account.sessions += 1;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 40)]
    pub study_account: Account<'info, StudyAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AddHours<'info> {
    #[account(mut)]
    pub study_account: Account<'info, StudyAccount>,
}

#[account]
pub struct StudyAccount {
    pub owner: Pubkey,
    pub hours: u32,
    pub sessions: u32,
}