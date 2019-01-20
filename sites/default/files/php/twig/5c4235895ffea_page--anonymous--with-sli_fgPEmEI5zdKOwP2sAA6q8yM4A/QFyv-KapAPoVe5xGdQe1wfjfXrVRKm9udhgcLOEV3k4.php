<?php

/* profiles/opigno_lms/themes/contrib/platon/templates/page/page--anonymous--with-slider.html.twig */
class __TwigTemplate_9126a8c95701ccdcddf3e529fc6f4f27b4b91ebeaa21a525392a8784a2e52fe3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 52);
        $filters = array("t" => 75);
        $functions = array("path" => 82);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array('t'),
                array('path')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 48
        echo "
<div id=\"main\">
  ";
        // line 50
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "help", array()), "html", null, true));
        echo "

  ";
        // line 52
        if ($this->getAttribute(($context["page"] ?? null), "branding", array())) {
            // line 53
            echo "    <div id=\"page-branding\">
      ";
            // line 54
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "branding", array()), "html", null, true));
            echo "
      ";
            // line 55
            if ($this->getAttribute(($context["page"] ?? null), "menu", array())) {
                // line 56
                echo "        <button class=\"navbar-toggler\"></button>
      ";
            }
            // line 58
            echo "    </div>
  ";
        }
        // line 60
        echo "
  <div id=\"menu-wrapper\" class=\"d-md-none bg-faded\">
    ";
        // line 62
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "menu", array()), "html", null, true));
        echo "
  </div>

  <div id=\"main-content\">
    ";
        // line 66
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
        echo "
  </div>

  <aside id=\"user-sidebar\">
    <div class=\"d-none d-md-block\">
      ";
        // line 71
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "menu", array()), "html", null, true));
        echo "
    </div>

    <div class=\"form-wrapper user-login\" data-target=\"/user/login\" ";
        // line 74
        if (((($context["route_name"] ?? null) == "user.pass") || (($context["route_name"] ?? null) == "user.register"))) {
            echo "style=\"display: none;\"";
        }
        echo ">
      <h1>";
        // line 75
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("LOGIN")));
        echo "</h1>
      <div class=\"subtitle\">";
        // line 76
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Login with your")));
        echo "<br>";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("username or email")));
        echo "</div>
      ";
        // line 77
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["login_form"] ?? null), "html", null, true));
        echo "
      <div class=\"status_messages\">
        ";
        // line 79
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "status_messages", array()), "html", null, true));
        echo "
      </div>
      <div class=\"switch-link text-center mt-auto pt-4\">
        <div><a href=\"";
        // line 82
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.pass")));
        echo "\">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Request new password")));
        echo "</a></div>
        <div><a href=\"";
        // line 83
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.register")));
        echo "\">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Create new account")));
        echo "</a></div>
      </div>
    </div>

    <div class=\"form-wrapper user-password\" data-target=\"/user/password\" ";
        // line 87
        if ((($context["route_name"] ?? null) != "user.pass")) {
            echo "style=\"display: none;\"";
        }
        echo ">
      <h1>";
        // line 88
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("REQUEST NEW PASSWORD")));
        echo "</h1>
      <div class=\"subtitle\">";
        // line 89
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Enter your email address below and we'll")));
        echo "<br>";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("send you password reset instructions.")));
        echo "</div>
      ";
        // line 90
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["password_form"] ?? null), "html", null, true));
        echo "
      <div class=\"status_messages\">
        ";
        // line 92
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "status_messages", array()), "html", null, true));
        echo "
      </div>
      <div class=\"switch-link text-center mt-auto pt-4\">
        <div><a href=\"";
        // line 95
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.login")));
        echo "\">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Login")));
        echo "</a></div>
        <div><a href=\"";
        // line 96
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.register")));
        echo "\">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Create new account")));
        echo "</a></div>
      </div>
    </div>

    <div class=\"form-wrapper user-register\" data-target=\"/user/register\" ";
        // line 100
        if ((($context["route_name"] ?? null) != "user.register")) {
            echo "style=\"display: none;\"";
        }
        echo ">
      <h1>";
        // line 101
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("CREATE NEW ACCOUNT")));
        echo "</h1>
      ";
        // line 102
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["register_form"] ?? null), "html", null, true));
        echo "
      <div class=\"status_messages\">
        ";
        // line 104
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "status_messages", array()), "html", null, true));
        echo "
      </div>
      <div class=\"switch-link text-center mt-auto pt-4\">
        <div><a href=\"";
        // line 107
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.login")));
        echo "\">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Login")));
        echo "</a></div>
        <div><a href=\"";
        // line 108
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.pass")));
        echo "\">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Request new password")));
        echo "</a></div>
      </div>
    </div>

  </aside>
</div>
";
    }

    public function getTemplateName()
    {
        return "profiles/opigno_lms/themes/contrib/platon/templates/page/page--anonymous--with-slider.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  207 => 108,  201 => 107,  195 => 104,  190 => 102,  186 => 101,  180 => 100,  171 => 96,  165 => 95,  159 => 92,  154 => 90,  148 => 89,  144 => 88,  138 => 87,  129 => 83,  123 => 82,  117 => 79,  112 => 77,  106 => 76,  102 => 75,  96 => 74,  90 => 71,  82 => 66,  75 => 62,  71 => 60,  67 => 58,  63 => 56,  61 => 55,  57 => 54,  54 => 53,  52 => 52,  47 => 50,  43 => 48,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "profiles/opigno_lms/themes/contrib/platon/templates/page/page--anonymous--with-slider.html.twig", "/home/piyon/o2/profiles/opigno_lms/themes/contrib/platon/templates/page/page--anonymous--with-slider.html.twig");
    }
}
