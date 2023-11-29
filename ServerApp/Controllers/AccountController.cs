﻿using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServerApp.Models.ApiRequest;
using ServerApp.Models.Options;
using ServerApp.Repositories;
using ServerApp.Services;

namespace ServerApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly AccountService m_accountService;

        public AccountController(AccountService accountService)
        {
            m_accountService = accountService;
        }
        [HttpPost("[action]")]
        public TokenData Login(Login login)
        {
            return m_accountService.Token(login.NickName, login.Password);
        }

    }
}
