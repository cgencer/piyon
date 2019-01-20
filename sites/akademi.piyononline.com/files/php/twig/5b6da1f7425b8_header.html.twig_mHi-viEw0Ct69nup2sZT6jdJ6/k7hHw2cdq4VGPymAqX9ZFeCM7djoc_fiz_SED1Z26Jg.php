<?php

/* profiles/opigno_lms/themes/platon/templates/layout/header.html.twig */
class __TwigTemplate_f7738941eb0019619d71fa284433a8bea08c0e552c4797d1101d4deb59167244 extends Twig_Template
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
        $tags = array("if" => 3);
        $filters = array("t" => 19);
        $functions = array("attach_library" => 28, "path" => 46, "url" => 53);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array('t'),
                array('attach_library', 'path', 'url')
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

        // line 1
        echo "<header id=\"site-header\">
  <div class=\"container d-flex align-items-center\">
    ";
        // line 3
        if ($this->getAttribute(($context["page"] ?? null), "branding", array())) {
            // line 4
            echo "      <div id=\"header-left\">
        ";
            // line 5
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "branding", array()), "html", null, true));
            echo "
      </div>
    ";
        }
        // line 8
        echo "    <div id=\"header-right\" class=\"ml-auto d-flex\">
      <div class=\"user-notifications dropdown\">
        <a href=\"#\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
          <span class=\"picto\"></span>
          ";
        // line 12
        if (($context["notifications_unread_count"] ?? null)) {
            // line 13
            echo "            <div class=\"unread\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["notifications_unread_count"] ?? null), "html", null, true));
            echo "</div>
          ";
        }
        // line 15
        echo "        </a>
        <div class=\"dropdown-menu dropdown-menu-right\">
          <div class=\"info d-flex\">
            <div class=\"flex-1\">
              <div><strong class=\"text-uppercase\">";
        // line 19
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("notifications")));
        echo "</strong></div>
            </div>
            <button class=\"close-dropdown\">close</button>
          </div>
          <a id=\"read-all-notifications\" class=\"mark-as-read\" href=\"#\">";
        // line 23
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Mark as all read")));
        echo "</a>
          <div id=\"notifications-wrapper\">";
        // line 24
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["notifications_unread"] ?? null), "html", null, true));
        echo "</div>
          <a id=\"show-all-notifications\" class=\"dropdown-item primary text-center\" href=\"/notifications\">
            <span>";
        // line 26
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("See all notifications")));
        echo "</span>
          </a>
          ";
        // line 28
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("opigno_notification/opigno_notification"), "html", null, true));
        echo "
        </div>
      </div>
      <div class=\"user-messages dropdown ml-3\">
        <a href=\"#\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
          <span class=\"picto\"></span>
          ";
        // line 34
        if (($context["unread_thread_count"] ?? null)) {
            // line 35
            echo "            <div class=\"unread\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["unread_thread_count"] ?? null), "html", null, true));
            echo "</div>
          ";
        }
        // line 37
        echo "        </a>
        <div class=\"dropdown-menu dropdown-menu-right\">
          <div class=\"info d-flex\">
            <div class=\"flex-1\">
              <div><strong class=\"text-uppercase\">";
        // line 41
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("messages")));
        echo "</strong></div>
            </div>
            <button class=\"close-dropdown\">close</button>
          </div>
          ";
        // line 45
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["private_messages"] ?? null), "html", null, true));
        echo "
          <a class=\"dropdown-item primary text-center\" href=\"";
        // line 46
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("private_message.private_message_page")));
        echo "\">
            <span>";
        // line 47
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("See all messages")));
        echo "</span>
          </a>
        </div>
      </div>
      ";
        // line 51
        if (($context["logged_in"] ?? null)) {
            // line 52
            echo "        <div class=\"user-block ml-3 dropdown\">
          <a href=\"";
            // line 53
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.canonical", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
            echo "\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
            <span class=\"picto\" ";
            // line 54
            if (($context["user_picture"] ?? null)) {
                echo "style=\"background-image:url('";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["user_picture"] ?? null), "html", null, true));
                echo "')\"";
            }
            echo "></span>
          </a>
          <div class=\"dropdown-menu dropdown-menu-right\">
            <div class=\"info d-flex\">
              <div class=\"flex-1\">
                <div><strong class=\"text-uppercase\">";
            // line 59
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["user"] ?? null), "username", array()), "html", null, true));
            echo "</strong></div>
                <div class=\"user-status text-uppercase\">";
            // line 60
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("online")));
            echo "</div>
              </div>
              <button class=\"close-dropdown\">close</button>
            </div>
            <a class=\"dropdown-item\" href=\"";
            // line 64
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.canonical", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
            echo "\">
              <span>";
            // line 65
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("User profile")));
            echo "</span>
            </a>
            <a class=\"dropdown-item\" href=\"";
            // line 67
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.edit_form", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
            echo "\">
              <span>";
            // line 68
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Settings")));
            echo "</span>
            </a>
            <a class=\"dropdown-item\" href=\"https://www.opigno.org\" target=\"_blank\">
              <span>";
            // line 71
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Help")));
            echo "</span>
            </a>
            <a class=\"dropdown-item primary text-center\" href=\"";
            // line 73
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("user.logout")));
            echo "\">
              <span>";
            // line 74
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Logout")));
            echo "</span>
            </a>
          </div>
        </div>
      ";
        }
        // line 79
        echo "
      <button class=\"navbar-toggler\"></button>
    </div>
  </div>
  <div class=\"search-trigger d-flex align-items-center\">
    <a href=\"#\">
      <div class=\"picto search\">";
        // line 85
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("search")));
        echo "</div>
    </a>
  </div>
  <div id=\"search-form\" style=\"display: none;\">
    ";
        // line 89
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["search_form"] ?? null), "html", null, true));
        echo "
  </div>
</header>

";
        // line 93
        if ($this->getAttribute(($context["page"] ?? null), "menu", array())) {
            // line 94
            echo "  <div id=\"menu-wrapper\" class=\"container\" role=\"complementary\">
    <div class=\"bg-faded\">
      ";
            // line 96
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "menu", array()), "html", null, true));
            echo "
      <div class=\"d-md-none\">
        <nav id=\"mobile-menu\">
          <ul>
            <li>
              <a href=\"";
            // line 101
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("search.view_node_search")));
            echo "\">
                ";
            // line 102
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Search")));
            echo "
              </a>
            </li>
            ";
            // line 105
            if (($context["logged_in"] ?? null)) {
                // line 106
                echo "              <li>
                <a href=\"";
                // line 107
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.canonical", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
                echo "\">
                  <span>";
                // line 108
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("User profile")));
                echo "</span>
                </a>
              </li>
              <li>
                <a href=\"";
                // line 112
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.edit_form", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
                echo "\">
                  <span>";
                // line 113
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Settings")));
                echo "</span>
                </a>
              </li>
              <li>
                <a href=\"https://www.opigno.org\" target=\"_blank\">
                  <span>";
                // line 118
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Help")));
                echo "</span>
                </a>
              </li>
              <li>
                <a href=\"";
                // line 122
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("user.logout")));
                echo "\">
                  <span>";
                // line 123
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Logout")));
                echo "</span>
                </a>
              </li>
            ";
            }
            // line 127
            echo "          </ul>
        </nav>
      </div>
    </div>
  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/opigno_lms/themes/platon/templates/layout/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  304 => 127,  297 => 123,  293 => 122,  286 => 118,  278 => 113,  274 => 112,  267 => 108,  263 => 107,  260 => 106,  258 => 105,  252 => 102,  248 => 101,  240 => 96,  236 => 94,  234 => 93,  227 => 89,  220 => 85,  212 => 79,  204 => 74,  200 => 73,  195 => 71,  189 => 68,  185 => 67,  180 => 65,  176 => 64,  169 => 60,  165 => 59,  153 => 54,  149 => 53,  146 => 52,  144 => 51,  137 => 47,  133 => 46,  129 => 45,  122 => 41,  116 => 37,  110 => 35,  108 => 34,  99 => 28,  94 => 26,  89 => 24,  85 => 23,  78 => 19,  72 => 15,  66 => 13,  64 => 12,  58 => 8,  52 => 5,  49 => 4,  47 => 3,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "profiles/opigno_lms/themes/platon/templates/layout/header.html.twig", "/home/piyon/v8/profiles/opigno_lms/themes/platon/templates/layout/header.html.twig");
    }
}
